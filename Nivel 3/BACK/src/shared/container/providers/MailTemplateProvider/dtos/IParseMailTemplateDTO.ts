interface ITemplateVariables {
  [key: string]: unknown;
}
export default interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}
