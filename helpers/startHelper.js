function convertStarToStringLabel(starVote) {
    let starVoteStr = 'Đánh giá sao';
    if (starVote >= 1 && starVote < 2) {
        starVoteStr = 'Rất tệ';
    } else if (starVote >= 2 && starVote < 3) {
        starVoteStr = 'Tệ';
    } else if (starVote >= 3 && starVote < 4) {
        starVoteStr = 'Bình thường';
    } else if (starVote >= 4 && starVote < 5) {
        starVoteStr = 'Tốt';
    } else if (starVote >= 5) {
        starVoteStr = 'Rất tuyệt';
    }

    return starVoteStr;
}

export {
    convertStarToStringLabel
};
