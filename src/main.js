import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamagotchi } from './tamagotchi';
import $ from 'jquery';

$(document).ready(function(){
  let tamagotchi = new Tamagotchi();
  $(".hungerLevel").text(tamagotchi.hunger);
  $(".sleepLevel").text(tamagotchi.sleep);
  $(".happinessLevel").text(tamagotchi.happiness);
  $(".cleanlinessLevel").text(tamagotchi.cleanliness);
  $(".healthLevel").text(tamagotchi.health);
  $(".sickStatus").text(tamagotchi.isSick ? "yes" : "no");
  tamagotchi.setHunger();
  tamagotchi.setSleep();
  tamagotchi.setHappiness();
  tamagotchi.setCleanliness();
  tamagotchi.setHealth();
  tamagotchi.setIsSick();

  /*let request = new XMLHttpRequest();
  const url = `api.giphy.com/v1/gifs/search?api_key=[YOUR API KEY]&q=tamagotchi&limit=20&rating=pg-13`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  }

  request.open("GET", url, true);
  request.send();*/

  let info = setInterval(() => {
    $(".hungerLevel").text(tamagotchi.hunger);
    $(".sleepLevel").text(tamagotchi.sleep);
    $(".happinessLevel").text(tamagotchi.happiness);
    $(".cleanlinessLevel").text(tamagotchi.cleanliness);
    $(".healthLevel").text(tamagotchi.health);
    $(".sickStatus").text(tamagotchi.isSick ? "yes" : "no");
    if(tamagotchi.health <= 0) {
      $(".game-over").text("GAME OVER");
      clearInterval(info);
    }
  }, 1000);
  
  $(".feed").click(function() {
    if(tamagotchi.health <= 0) {
      $(".feed").prop('disabled', true);
    } else {
      tamagotchi.feed();
      $(".hungerLevel").text(tamagotchi.hunger);
    }
  });
  
  $(".putToBed").click(function() {
    if(tamagotchi.health <= 0) {
      $(".putToBed").prop('disabled', true);
    } else {
      tamagotchi.putToBed();
      $(".sleepLevel").text(tamagotchi.sleep);
    }
  });
  
  $(".play").click(function() {
    if(tamagotchi.health <= 0) {
      $(".play").prop('disabled', true);
    } else {
      tamagotchi.play();
      $(".happinessLevel").text(tamagotchi.happiness);
    }
  });
  
  $(".wash").click(function() {
    if(tamagotchi.health <= 0) {
      $(".wash").prop('disabled', true);
    } else {
      tamagotchi.wash();
      $(".cleanlinessLevel").text(tamagotchi.cleanliness);
    }
  });
});
