import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './InjectionScriptWebPartWebPart.module.scss';
import * as strings from 'InjectionScriptWebPartWebPartStrings';
import { SPComponentLoader } from '@microsoft/sp-loader';
require("./asset/Injection.css");

export interface IInjectionScriptWebPartWebPartProps {
  ZoneId: string;
  JavaScirptLink: string;
}

export default class InjectionScriptWebPartWebPart extends BaseClientSideWebPart<IInjectionScriptWebPartWebPartProps> {

  public render(): void {
    let ZoneId = this.properties.ZoneId,
      ImgSrc = require<string>('./asset/loading.gif'),
      Mesg = `<div id="linyuLoading"><div id="linyuLoadingImg"><img src="${ImgSrc}"></img></div><div id="linyuLoadingText">loading</div></div>`;

    if (ZoneId === "")
      Mesg = "<div id='linyuWarning'>Please configure \"Zone Id\" in WebPart Properties</div>";

    this.domElement.innerHTML = `<div id="${ZoneId}">${Mesg}</div>`;
    console.log("123");


    if (this.properties.JavaScirptLink != "")
      SPComponentLoader.loadScript(this.properties.JavaScirptLink);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupName: "WebPart Properties",
              groupFields: [
                PropertyPaneTextField('ZoneId', {
                  label: "Zone Id",
                  description: "Please enter your Zone Id"
                }),
                PropertyPaneTextField('JavaScirptLink', {
                  label: "JavaScirpt Link",
                  description: "Please enter your JavaScript file reference URL",
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
