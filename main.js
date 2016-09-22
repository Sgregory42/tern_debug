
var factory = require('./factory.creep');
var roleHarvester = require('./role.harvester');
var roleUpgrader = require('./role.upgrader');
var roleBuilder = require('./role.builder');


module.exports.loop = function () {
    factory.clone();
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.roleId === 'harvester' || creep.memory.roleId == 'harvester2') {
            roleHarvester.run(creep);
        }
        if(creep.memory.roleId === 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.roleId === 'builder') {
            roleBuilder.run(creep);
        }
    }
    // object to test autocomplete
    var rect = { test: "toto",
                 titi : "coucou" 
               };
    var test = rect.titi;
    
};
