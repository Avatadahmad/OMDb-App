const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("To check server's status!", () => {
  it("welcomes user to the api", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.message).to.equals("Welcome To Testing API");
        done();
      });
  });

  it("Check for Movie Results(Number of movies)",done =>{
      chai
      .request(app)
      .get("/moviesearch/thor")
      .end((err,res)=>{
          expect(res.body.Search.length).to.equals(10);
       done();   
      })
  });


  it("Check for Movie ",done =>{
    chai
    .request(app)
    .get("/moviesearch/movielist/tt0800369")
    .end((err,res)=>{
        expect(res.body.Title).to.equals("Thor");
     done();   
    })
   })

   it("Check for Incorrect IMDB ID ",done =>{
    chai
    .request(app)
    .get("/moviesearch/movielist/tt08003")
    .end((err,res)=>{
        
        expect(res.body.Error).to.equals("Incorrect IMDb ID.");
     done();   
    })
   })

  it("Check movie doesn't exists",done =>{
      chai
      .request(app)
      .get("/moviesearch/asafdf")
      .end((err,res)=>{
          
       expect(res.body.Error).to.equals("Movie not found!");
     done();   
    })
  })

  it("Check for another Movie Results(Number of movies)",done =>{
    chai
    .request(app)
    .get("/moviesearch/newton")
    .end((err,res)=>{
        expect(res.body.Search.length).to.equals(10);
     done();   
    })
})
  
});
