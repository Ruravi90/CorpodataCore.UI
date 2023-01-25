import { Base,Company } from '.';

export class Client extends Base{
  name? :string;
  lastName? :string;
  mothersLastName? :string;
  initials? :string;
  shortName? :string;
  active? :boolean;
  instanceId? :number;
  finder? :number;
  isCompany? :boolean;
  corporateName? :string;
  email? :string;
  nomenclature? :string;
  socialTypeId? :number;
  counter? :number;
  isDelete?:boolean;
  companies?:Array<Company>;
}
