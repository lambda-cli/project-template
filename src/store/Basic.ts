import { makeAutoObservable } from 'mobx';

interface IUserData {
  userName: string;
  userId: number;
}

class Basic {
  userData: IUserData | null = null;
  constructor() {
    makeAutoObservable(this);
  }

  updateUserData(data: IUserData) {
    this.userData = data;
  }
}

const basic = new Basic();

export default basic;
