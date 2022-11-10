interface ITemplateVariables {
  [key: string]: unknown;
}
export default interface IParseMailTemplateDTO {
  template: string;
  variables: ITemplateVariables;
}
