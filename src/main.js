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
  setInterval(() => {
    $(".hungerLevel").text(tamagotchi.hunger);
    $(".sleepLevel").text(tamagotchi.sleep);
    $(".happinessLevel").text(tamagotchi.happiness);
    $(".cleanlinessLevel").text(tamagotchi.cleanliness);
    $(".healthLevel").text(tamagotchi.health);
    $(".sickStatus").text(tamagotchi.isSick ? "yes" : "no");
  }, 1000);
  $(".feed").click(function() {
    tamagotchi.feed();
    $(".hungerLevel").text(tamagotchi.hunger);
  });
  
  $(".putToBed").click(function() {
    tamagotchi.putToBed();
    $(".sleepLevel").text(tamagotchi.sleep);
  });
  
  $(".play").click(function() {
    tamagotchi.play();
    $(".happinessLevel").text(tamagotchi.happiness);
  });
  
  $(".wash").click(function() {
    tamagotchi.wash();
    $(".cleanlinessLevel").text(tamagotchi.cleanliness);
  });
});
