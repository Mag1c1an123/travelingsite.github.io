const lakePlan = {
    days: "3 days and 3 nights",
    food: "the most delicious seafood",
    currency: "$",
    cost: 500,
    Place: "strong rock cabin",
    discount: function(){
        const theDate = new Date();
        const theMonth = theDate.getMonth();
        if(theMonth == 9){
            this.cost = this.cost * .85
            console.log(this.cost)
        }
    }
};

lakePlan.discount();

const beachPlan = {
    days: "3 days and 3 nights",
    food: "Amazing seafood and beers",
    currency: "$",
    cost: 400,
    Place: "ocean sanke cabin",
    discount: function(){
        const theDate = new Date();
        const theMonth = theDate.getMonth();
        if(theMonth == 9){
            this.cost = this.cost * .85
            console.log(this.cost)
        }
    }
};

beachPlan.discount();

const mountainPlan = {
    days: "4 days and 4 nights",
    food: "tasty beef and potatos",
    currency: "$",
    cost: 575,
    Place: "bear hug cabin",
    discount: function(){
        const theDate = new Date();
        const theMonth = theDate.getMonth();
        if(theMonth == 9){
            this.cost = this.cost * .85
            console.log(this.cost)
        }
    }
};

mountainPlan.discount();

function showLakeInfo(){
    const lakeImg = document.getElementById('img-lake');
    lakeImg.classList.add("plan-lake-function");
    document.getElementById('lakeP').style.display = "none";
    const divLake = document.getElementById('lake-object').innerHTML = lakePlan.days + " for only " + lakePlan.currency + lakePlan.cost + " and " + lakePlan.food;
    document.getElementById('lake-object').className = "lake-object-function";
}

function showBeachInfo(){
    const beachImg = document.getElementById('img-beach');
    beachImg.classList.add("plan-lake-function");
    document.getElementById('beachP').style.display = "none";
    const divLake = document.getElementById('beach-object').innerHTML = beachPlan.days + " for only " + beachPlan.currency + beachPlan.cost + " and " + beachPlan.food;
    document.getElementById('beach-object').className = "lake-object-function";
}

function showMountainInfo(){
    const mountainImg = document.getElementById('img-mountain');
    mountainImg.classList.add("plan-lake-function");
    document.getElementById('mountainP').style.display = "none";
    const divLake = document.getElementById('mountain-object').innerHTML = mountainPlan.days + " for only " + mountainPlan.currency + mountainPlan.cost + " and " + mountainPlan.food;
    document.getElementById('mountain-object').className = "lake-object-function";
}