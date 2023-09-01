
// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

// Example


// If person  bribes person , the queue will look like this: . Only  bribe is required. Print 1.


// Person  had to bribe  people to get to the current position. Print Too chaotic.

// Function Description

// Complete the function minimumBribes in the editor below.

// minimumBribes has the following parameter(s):

// int q[n]: the positions of the people after all bribes
// Returns

// No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than  people.

function arraysAreEqual(a, b) {
    return a.every((element, index) => element === b[index]);
}

function minimumBribes(q) {
    let left = 0 ;
    
    let ans = 0 ;
    let bribeQty = 0 ;
    let over = false;
    let sortedSoFar = 0;
    //2 1 5 3 4
    
    
    while (true) {

        //0 - 2
        if(left >= (q.length-1)){
            if(sortedSoFar === 0 ) break
            left = sortedSoFar-1
            sortedSoFar = 0
        }
        let current = q[left];
        

        // console.log('current ',current,left,)
        while(current > q[left+1]){
            bribeQty+=1 //2
            if(!sortedSoFar){
                // console.log('SSF',left)
                sortedSoFar = left; //0 2
            }
            if(bribeQty == 3 ){
                ans = "Too chaotic"
                over = true
                break;
            }
            let aux = q[left] //2  5  5
            q[left] = q[left+1] //1  3  4
            q[left+1] = aux // 2   5  5
            left+=1  // 1  3  4
            // console.log('Out',q)
        }

        //1 2 5 3 4 
        if(over) break
        ans+=bribeQty //1  3
        left +=1 - bribeQty  //1 2  3
        // console.log(q,'qq',left)
        bribeQty=0
    } 
    console.log(ans);

}