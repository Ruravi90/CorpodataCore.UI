import { HubConnectionBuilder, HttpTransportType, LogLevel } from '@aspnet/signalr'

export default {
  install (Vue) {
    // use a new Vue instance as the interface for Vue components to receive/send SignalR events
    // this way every component can listen to events or send new events using this.$questionHub
    const tasksHub = new Vue()
    Vue.prototype.$tasksHub = tasksHub;

    // Provide methods to connect/disconnect from the SignalR hub
    let connection = null
    let startedPromise = null
    let manuallyClosed = false

    Vue.prototype.$tasksHub.startSignalR = (jwtToken) => {
      connection = new HubConnectionBuilder()
        .withUrl(
          `${Vue.prototype.$http.defaults.baseURL}/tasksHub`,{
            accessTokenFactory : () => Vue.$cookies.get("token_session")
          })
        .configureLogging(LogLevel.Information)
        .build()

      // Forward hub events through the event, so we can listen for them in the Vue components
      connection.on('ReceiveAllTasks', (data) => {
        console.log('ReceiveAllTasks', data)
      })

      // You need to call connection.start() to establish the connection but the client wont handle reconnecting for you!
      // Docs recommend listening onclose and handling it there.
      // This is the simplest of the strategies
      function start () {
        startedPromise = connection.start()
          .catch(err => {
            //console.error('Failed to connect with hub', err)
            return new Promise((resolve, reject) => setTimeout(() => start().then(resolve).catch(reject), 5000))
          })
        return startedPromise
      }
      connection.onclose(() => {
        if (!manuallyClosed) start()
      })

      // Start everything
      manuallyClosed = false
      start()
    }
    
    Vue.prototype.$tasksHub.stopSignalR = () => {
      if (!startedPromise) return

      manuallyClosed = true
      return startedPromise
        .then(() => connection.stop())
        .then(() => { startedPromise = null })
    }

    // Provide methods for components to send messages back to server
    // Make sure no invocation happens until the connection is established
    tasksHub.Opened = (InstanceId) => {
      if (!startedPromise) return

      return startedPromise
        .then(() => connection.invoke('JoinGroup',InstanceId))
        .catch(console.error)
    }
    tasksHub.Closed = (InstanceId) => {
      if (!startedPromise) return

      return startedPromise
        .then(() => connection.invoke('LeaGroup', InstanceId))
        .catch(console.error)
    }
    tasksHub.sendMessage = (message) => {
      if (!startedPromise) return

      return startedPromise
        .then(() => connection.invoke('SendLiveChatMessage', message))
        .catch(console.error)
    }
  }
}