function wilsonScore(sumRating, numberOfVotes){
    const z = 1.64485;
    const vMin = 0;
    const vMax = 5;
    const vWidth = vMax - vMin;
    const phat = (sumRating - numberOfVotes * vMin) / v_width / numberOfVotes;
    const rating = (phat+z*z/(2*n)-z*Math.sqrt((phat*(1-phat)+z*z/(4*numberOfVotes))/numberOfVotes))/(1+z*z/numberOfVotes);
    return rating * vWidth + vMin;
}
