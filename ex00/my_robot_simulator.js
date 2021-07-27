function my_robot_simulator(directions) {
    let x = 0;
    let y = 0;
    let bearing = 'north'

    for(var i = 0; i < directions.length; i++) {
        if(directions[i] == 'A') {
            if(bearing == 'north') {
                y--;
            }
            if(bearing == 'south') {
                y++;
            }
            if(bearing == 'east') {
                x++;
            }
            if(bearing == 'west') {
                x--;
            }
        }
        if(directions[i] == 'R') {
            if(bearing == 'north') {
                bearing = 'east'
            } else if(bearing == 'south') {
                bearing = 'west'
            } else if(bearing == 'east') {
                bearing = 'south'
            } else if(bearing == 'west') {
                bearing = 'north'
            }
        }
        if(directions[i] == 'L') {
            if(bearing == 'north') {
                bearing = 'west'
            } else if(bearing == 'south') {
                bearing = 'east'
            } else if(bearing == 'east') {
                bearing = 'north'
            } else if(bearing == 'west') {
                bearing = 'south'
            }
        }
    }
    return `{x: ${x}, y: ${y}, bearing: '${bearing}'}`
    
}
// console.log(my_robot_simulator("RAALALL"));