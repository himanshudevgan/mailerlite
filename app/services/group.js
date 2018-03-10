'use strict';
const Group = require('./../models/group');

const group = {

        addgroup: async (group) => {
                try {
                        let data ={
                                groupname:group.name,
                                mlgid:group.id
                        }
                        let addgroup = new Group(data);
                        return await addgroup.save();
                } catch (err) {
                        console.log(err);
                }
        },
        getgroup: async () => {
                let groups = await Group.find({active: true});
                return groups


        },
             
}
module.exports = group;