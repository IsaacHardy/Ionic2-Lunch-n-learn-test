import {Page} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  constructor() {
    this.searchQuery = '';
    this.initializePlayers();
  }
  initializePlayers() {
    this.reds = [
      'Amir Garrett',
      'Anthony DeSclafani',
      'Billy Hamilton',
      'Brandon Finnegan',
      'Brandon Phillips',
      'Devin Mesoraco',
      'Eugenio Suarez',
      'Homer Bailey',
      'Isaac Hardy',
      'Jay Bruce',
      'J.J. Hoover',
      'Joey Votto',
      'John Lamb',
      'Jose Peraza',
      'Jumbo Diaz',
      'Michael Lorenzen',
      'Raisel Iglesias',
      'Robert Stephenson',
      'Rookie Davis',
      'Tony Cingrani',
      'Tucker Barnhart',
      'Zack Cozart',
    ];
  }
  getPlayers(searchbar) {
    this.initializePlayers();
    console.log(searchbar);

    let value = searchbar.value;

    if(value.trim() == '') {
      return;
    }
    this.reds = this.reds.filter((player) => {
      if (player.toLowerCase().indexOf(value.toLowerCase()) > -1) {
        return true;
      }
      return false;
    });
  }
}
