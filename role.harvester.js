var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
       // console.log('harvester ');
	    if (creep.carry.energy < creep.carryCapacity ) {
	        var source = creep.pos.findClosestByRange(FIND_SOURCES);
	        if (!source || creep.harvest(source) === ERR_NOT_IN_RANGE) {
	           creep.moveTo(Game.flags[creep.memory.source]);  
            }
        }
        else {
            var ret = creep.transfer(Game.spawns['Core1'], RESOURCE_ENERGY)
            if (ret == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Core1']);
            } else {
         //   console.log('harvester error ' + ret);
            }
        }
    }
};

module.exports = roleHarvester;
