function createCandidate(name) {
    return {
        name: name,
        votes: 0,
    };
}

function voteForCandidate(candidateArray, candidateName) {
    const candidate = candidateArray.find((c) => c.name === candidateName);
    if (candidate) {
        candidate.votes += 1;
    }
}

function printResults(candidateArray) {
    const sortedCandidates = candidateArray.slice().sort((a, b) => b.votes - a.votes);
    console.log(`\nThe winner is ${sortedCandidates[0].name} with ${sortedCandidates[0].votes} votes.`);
    console.log('results:');
    sortedCandidates.forEach((candidate) => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });

}

function main() {
    const numCandidates = parseInt(prompt('Enter the number of candidates: '));
    const candidates = [];

    for (let i = 1; i <= numCandidates; i++) {
        const candidateName = prompt(`Name for candidate ${i}: `);
        candidates.push(createCandidate(candidateName.toLowerCase()));
    }

    const numVoters = parseInt(prompt('Enter the number of voters: '), 10);

    for (let i = 1; i <= numVoters; i++) {
        const candidateName = prompt(`Enter the name of the candidate you want to vote:`);

        if (candidateName.trim() !== '') {
            voteForCandidate(candidates, candidateName.toLowerCase());
        }
    }

    printResults(candidates);
}

main();
