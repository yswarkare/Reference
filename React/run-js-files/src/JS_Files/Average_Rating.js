let ratings = {
	1: 10,
	2: 20,
	3: 30,
	4: 40,
	5: 50,
	6: 60,
	7: 70,
	8: 80,
	9: 90,
	10: 90
}

const averageRatings = (ratings) => {
    let totalRatings = 0
    let avgRating1
    let avgRating2 = 0
    
    for (let i = 1; i <= 10; i++){
    
        totalRatings = totalRatings + ratings[i]
    
        avgRating1 = i * ratings[i]
    
        avgRating2 = avgRating2 + avgRating1
    }
    
    let avgRating3 = avgRating2 / totalRatings
    
    let avgRating4 = Math.round(avgRating3)
    
    let avgRating = avgRating4 / 2
    
    console.log("totalRatings => " + totalRatings);
    
    console.log("avgRating => " + avgRating3);
    
    console.log("avgRating rounded up => " + (avgRating));
    return avgRating;    
}

export default averageRatings(ratings)