var roleHarvester = {
    /** @param {Creep} creep **/
    run: function(creep) {
       // console.log('harvester ');
        if (creep.carry.energy < creep.carryCapacity) {
            var input = Game.getObjectById(creep.memory.inputId);
            var ret = creep.withdraw(input);
            if (ret === ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.memory.inputPos);
            } else if (ret === ERR_NOT_ENOUGH_ENERGY) {
                return ;
            }
        } else {
            var output = Game.getObjectById(creep.memory.outputId);
            var ret = creep.transfer(output);
            if (ret === ERR_NOT_IN_RANGE) creep.moveTo(outputPos);
        }
    }
};

module.exports = roleHarvester;
