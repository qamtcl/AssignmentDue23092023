// Call Back Hell

function GarageManual() {
  function CarMaintenace() {
    setTimeout(() => {
      console.log(`Car Enters the workshop for repair and maintenance`);
      setTimeout(() => {
        console.log(`Checkup by the supervisor upon arrival `);
        setTimeout(() => {
          console.log(`Listing of faults`);
          setTimeout(() => {
            console.log(`Handing over the list to mechinaic `);
            setTimeout(() => {
              console.log(`Issuance of parts from store`);
              setTimeout(() => {
                console.log(`Removal of old parts from car `);
                setTimeout(() => {
                  console.log(`Replacement of old and filters`);
                  setTimeout(() => {
                    console.log(`Replecement of plugs and injecters`);
                    setTimeout(() => {
                      console.log(`Replacement of Engine Belts`);
                      setTimeout(() => {
                        console.log(`Engine startup and tuneup settings`);
                        setTimeout(() => {
                          console.log(`electrical calibrations and computer settings`);
                          setTimeout(() => {
                            console.log(`Final run and packup`);
                            setTimeout(() => {
                              console.log(`Payment of Total Bill by the Car owner`);
                              setTimeout(() => {
                                console.log(`Handing over the car to owner by supervisor`);
                                setTimeout(() => {
                                  console.log(`Satisfied car owner drove the car out`);
                                }, 1000);
                              }, 1000);
                            }, 1000);
                          }, 5000);
                        }, 3000);
                      }, 2000);
                    }, 1000);
                  }, 2000);
                }, 2000);
              }, 2000);
            }, 900);
          }, 800);
        }, 700);
      }, 600);
    }, 500);
  }
  CarMaintenace();
  function ReplacementOfTyres() {
    setTimeout(() => {
      console.log(`Removal of old tyres from car`);
      setTimeout(() => {
        console.log(`Issuance of new tyres from Store`);
        setTimeout(() => {
          console.log(`removal of old tyres from the rims`);
          setTimeout(() => {
            console.log(`fitting of new tyres on the rims`);
            setTimeout(() => {
              console.log(`Wheel Balancing`);
              setTimeout(() => {
                console.log(`fitting of new tyres with car`);
              }, 10001);
            }, 2000);
          }, 2000);
        }, 1000);
      }, 2000);
    }, 5000);
  }
  ReplacementOfTyres();
  function CarFuelTankMaintenace() {
    setTimeout(() => {
      console.log(`Empty the fuel tank`);
      setTimeout(() => {
        console.log(`remove the tank from the car`);
        setTimeout(() => {
          console.log(`washing and removal of rust from fuel tank`);
          setTimeout(() => {
            console.log(`fitting of new gauge and punp`);
            setTimeout(() => {
              console.log(`fitting of fuel tank with the car`);
            }, 2000);
          }, 1000);
        }, 1000);
      }, 3000);
    }, 2000);
  }  
  CarFuelTankMaintenace();
  function CarBodywork(){
    setTimeout(() => {
      console.log("Car body checkup by the denter");
      setTimeout(() => {
        console.log(`removal of dents and paint job`);
        setTimeout(() => {
            console.log(`Denting and paint inspection`);
            setTimeout(() => {
              console.log(`Polishing and final body touchup`);
              setTimeout(() => {
                console.log(`Special coating of paint protector`);
              },1000);
            }, 2000);
          }, 1000);
        }, 3000);
      }, 2000);
    } 
    CarBodywork();
}
GarageManual();
