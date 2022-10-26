interface IVariables {
  [key: string]: unknown;
}
export default interface IParseMailTemplateDTO {
  template: string;
  variables: IVariables;
}
