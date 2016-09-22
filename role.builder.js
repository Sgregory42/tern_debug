var _ = require('lodash');

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvesting');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('building');
	    }
        var tab = [STRUCTURE_EXTENSION, STRUCTURE_TOWER];
	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
	        var ext = _.filter(targets, (obj) => tab.indexOf(obj.structureType) != -1);
	        if (ext.length) {
	            if (creep.build(ext[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(ext[0]);
                }     
	        }
            else if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
	    }
	}
};

module.exports = roleBuilder;