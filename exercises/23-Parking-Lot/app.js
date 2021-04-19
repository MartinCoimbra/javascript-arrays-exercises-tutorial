let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
function getParkingLotState(parkingArray){
    const state = {
    /* puestosDeEstacionamientosTotal */
     totalSlots: 0,
     /* lugarLibre */
     availableSlots: 0,
     /* lugarOcupado */
     occupiedSlots: 0
    }

    parkingArray.forEach(row => {
        row.forEach(col => {
            switch (col) {
                case 0:
                    break;
                case 1:
                    state.totalSlots += 1;
                    state.occupiedSlots += 1;
                    break;
                case 2:
                    state.totalSlots += 1;
                    state.availableSlots += 1;
                    break;
                default:
                    break;
            }
        });
    });

    return state;
}
console.log(getParkingLotState(parking_state))
