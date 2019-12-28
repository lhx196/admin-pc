import { observable, action } from 'mobx';

export default class View {
  @observable content: number | string = '';
  @action changeContent = (num: number | string) => {
    this.content = num;
  };
}
