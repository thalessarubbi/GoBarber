interface ITemplateVaraibles {
  [key: string]: string;
}

export default interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVaraibles;
}
