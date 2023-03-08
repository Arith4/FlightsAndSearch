const { City } = require("../models/index");

class CityRepository {

  async createcity({ name }){
    try{
       const city = await City.create({
        name
       });
       return city;
    }
    catch(error){
       console.log("Something went wrong in the Repository layer");
       throw {error};
    }
  }

  async deleteCity(cityId){
    try{
      await City.destroy({
        where : {
          id : cityId
        }
      });
      return true;
    }
    catch(error){
       console.log("Something went wrong in the Repository layer");
       throw {error};
    }
  }

  async updateCity(cityId, data){
     try{
       const city = await City.update(data, {
        where : {
          id : cityId
        }
       });
       return city;
     }
     catch(error){
      console.log("Something went wrong in the Repository layer");
      throw {error};
   }
  }

  async getCity(cityId){
    try{
      const city = await City.findByPk(cityId);
      return city;
    }
    catch(error){
      console.log("Something went wrong in the Repository layer");
      throw {error};
    }
  }
}

module.exports = CityRepository;
