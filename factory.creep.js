
var factory  = {
    creepDNA : [
        {
            priority : 1,
            max  : 2,
            parts :  [CARRY,CARRY,MOVE],
            roleId : 'hauler',
            options : { roleId : 'hauler' },
            options : function() {
                var options = {
                    roleId : this.roleId
                };
                
            }
        },
        {
            priority : 1,
             max  : 2,
             parts :  [WORK,CARRY,MOVE],
             options : { roleId : 'harvester', source : "Source1"}
        },
          {
           priority : 2,
             max  : 3,
             parts :  [WORK,CARRY,MOVE],
             options : { roleId : 'builder'}
        },
        {
            priority : 1,
             max  : 5,
             parts :  [WORK,CARRY,MOVE],
             options : { roleId : 'harvester2', source : "Source2"}
        },
       {
           priority : 2,
             max  : 8,
             parts :  [WORK,CARRY,MOVE],
             options : { roleId : 'upgrader', upgrade : false}
        }
    ], 

    clone : function () {
       // console.log("Factory Cloing");
        var pattern = _.sortBy(this.creepDNA, function(o) { return o.priority; });
        for(var i = 0; i < pattern.length; i++) {
            var role = pattern[i];
           // console.log("Role " + role.options.roleId);
            var creepsFilter = _.filter(Game.creeps, (creep) => creep.memory.roleId === role.options.roleId);
           // console.log('filter ', creepsFilter);
            if (creepsFilter.length < role.max) {
                var newName = Game.spawns['Core1'].createCreep(role.parts, undefined, role.options);
                if (_.isString(newName)) {
               //    console.log('Spawning new : ' + role.options.roleId + " with name : " + newName);  
                   return ;
                }
                else {
                   //  console.log('Spawning error ' + newName);
                }
            }
        }
    },
    toto : function() {
        var test = 43;
        console.log(test);
    }
};


module.exports = factory;

/*

module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
} */
