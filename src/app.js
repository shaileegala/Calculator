import { LightningElement } from "lwc";
import {add, subtract} from "./utils.js";
export default class App extends LightningElement {
  connectedCallback(){
    add(5,7);
    subtract(10,2);
  }
  
  
}
