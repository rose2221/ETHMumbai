
// const sdk = require('api')('@neynar/v2.0#1kus61ylt8dz5of');

// async function fetchAndProcessChannelIds() {
//     try {
//         // Make the API call with async/await
//         const { data } = await sdk.casts({
//             fid: '3',
//             viewerFid: '278538',
//             limit: '150',
//             api_key: '7AB956E1-C155-43F1-B7F3-5C3B8D070265'
//         });

//         // Function to count channels
//         function countChannels(casts) {
//             const channelCounts = {};
//             const channelMap = new Map();
//             // Iterate through each cast
//             casts.forEach(cast => {
//                 // const { parentUrl } = cast;
//                 const { parentUrl, hash } = cast;
//                 if (parentUrl && parentUrl.includes("https://warpcast.com/~/channel/")) {
//                     const urlParts = parentUrl.split("/");
//                     const channelName = urlParts[urlParts.length - 1]; // Extract the channel name

//                     // Increment the count for this channel in the map
//                     if (channelName in channelCounts) {
//                         channelCounts[channelName]++;
//                     } else {
//                         channelCounts[channelName] = 1;
//                     }
//                     if (channelMap.has(channelName)) {
//                         channelMap.get(channelName).push(hash);
//                     } else {
//                         // Otherwise, create a new array with the current hash
//                         channelMap.set(channelName, [hash]);
//                     }
//                 }
//                 }
//             );

//             // return channelCounts;
//             return channelMap;
//         }
//         const { casts } = data.result;

//         // Use the function to map channel IDs to cast hashes
//         const channelCastMap = fetchAndProcessChannelIds(casts);

//         function mapToObject(map) {
//             const object = {};
//             map.forEach((value, key) => {
//                 object[key] = value;
//             });
//             return object;
//         }
//         // const channelCastObject = Object.fromEntries(channelCastMap);
//         // Use the custom function to convert the map to an object
//         const channelCastObject = mapToObject(channelCastMap);

//         console.log(channelCastObject);

//         // Convert the Map to an Object for easier logging or JSON conversion
      

//         console.log(channelCastObject);
//         // Use the function to count channels
//         // const channelCounts = countChannels(data.result.casts);

//         // // Log the result to see the map of channel names and their occurrence counts
//         // console.log(channelCounts);
//     } catch (err) {
//         // Log any errors that occur during the API call or data processing
//         console.error(err);
//     }
// }

// // Call the function to execute
// fetchAndProcessChannelIds();

       
// const sdk = require('api')('@neynar/v2.0#1kus61ylt8dz5of');

// async function fetchAndProcessChannelIds() {
//     try {
//         // Make the API call with async/await
//         const { data } = await sdk.casts({
//             fid: '3',
//             viewerFid: '278538',
//             limit: '150',
//             api_key: '7AB956E1-C155-43F1-B7F3-5C3B8D070265'
//         });

//         // Directly call countChannels with the casts data to process it
//         const channelCastMap = countChannels(data.result.casts);

//         // Convert the Map to an Object
//         const channelCastObject = mapToObject(channelCastMap);

//         console.log(channelCastObject);
//     } catch (err) {
//         console.error(err);
//     }
// }

// // Function to count channels and map channel IDs to cast hashes
// function countChannels(casts) {
//     const channelMap = new Map();
//     casts.forEach(cast => {
//         const { parentUrl, hash } = cast;
//         if (parentUrl && parentUrl.includes("https://warpcast.com/~/channel/")) {
//             const urlParts = parentUrl.split("/");
//             const channelName = urlParts[urlParts.length - 1]; // Extract the channel name

//             if (channelMap.has(channelName)) {
//                 channelMap.get(channelName).push(hash);
//             } else {
//                 channelMap.set(channelName, [hash]);
//             }
//         }
//     });

//     return channelMap;
// }

// // Function to convert a Map to an Object
// function mapToObject(map) {
//     const object = {};
//     for (let [key, value] of map) {
//         object[key] = value;
//     }
//     return object;
// }

// // Call the function to execute
// fetchAndProcessChannelIds();

// const sdk = require('api')('@neynar/v2.0#1kus61ylt8dz5of');

// const sdk = require('api')('@neynar/v2.0#1kus61ylt8dz5of');

// const sdk = require('api')('@neynar/v2.0#1kus61ylt8dz5of');

// // Function to fetch likes for a single cast hash
// async function fetchLikesForCastHash(castHash) {
//     try {
//         const { data } = await sdk.castLikes({
//             castHash: castHash,
//             viewerFid: '3',
//             limit: '25',
//             api_key: '7AB956E1-C155-43F1-B7F3-5C3B8D070265'
//         });
//         return data.result.likes.length; // Return the number of likes
//     } catch (err) {
//         console.error(err);
//         return 0; // Return 0 likes in case of an error
//     }
// }

// // Main function to process channel IDs and count likes for each channel
// async function fetchAndProcessChannelIds() {
//     try {
//         const { data } = await sdk.casts({
//             fid: '3',
//             viewerFid: '278538',
//             limit: '150',
//             api_key: '7AB956E1-C155-43F1-B7F3-5C3B8D070265'
//         });

//         const channelCastMap = countChannels(data.result.casts);
//         const likesCountMap = new Map();

//         for (let [channelName, castHashes] of channelCastMap) {
//             let totalLikes = 0;
//             for (let hash of castHashes) {
//                 const likes = await fetchLikesForCastHash(hash);
//                 totalLikes += likes;
//             }
//             likesCountMap.set(channelName, totalLikes);
//         }

//         // Convert the likes count map to an object for easier logging
//         const likesCountObject = mapToObject(likesCountMap);
//         console.log(likesCountObject);
//     } catch (err) {
//         console.error(err);
//     }
// }

// // Existing helper functions
// function countChannels(casts) {
//     const channelMap = new Map();
//     casts.forEach(cast => {
//         const { parentUrl, hash } = cast;
//         if (parentUrl && parentUrl.includes("https://warpcast.com/~/channel/")) {
//             const urlParts = parentUrl.split("/");
//             const channelName = urlParts[urlParts.length - 1];
//             if (channelMap.has(channelName)) {
//                 channelMap.get(channelName).push(hash);
//             } else {
//                 channelMap.set(channelName, [hash]);
//             }
//         }
//     });
//     return channelMap;
// }

// function mapToObject(map) {
//     const object = {};
//     for (let [key, value] of map) {
//         object[key] = value;
//     }
//     return object;
// }

// // Call the main function
// fetchAndProcessChannelIds();
require('dotenv').config();

const sdk = require('api')('@neynar/v2.0#1kus61ylt8dz5of');
const apiKey = process.env.API_KEY;
// Function to map channels and their casts
function countChannels(casts) {
    const channelMap = new Map();
    casts.forEach(cast => {
        const { parentUrl, hash } = cast;
        if (parentUrl && parentUrl.includes("https://warpcast.com/~/channel/")) {
            const urlParts = parentUrl.split("/");
            const channelName = urlParts[urlParts.length - 1];
            if (channelMap.has(channelName)) {
                channelMap.get(channelName).push(hash);
            } else {
                channelMap.set(channelName, [hash]);
            }
        }
    });
    return channelMap;
}

// Function to fetch likes for a single cast hash
async function fetchLikesForCastHash(castHash) {
    try {
        const { data } = await sdk.castLikes({
            castHash: castHash,
            viewerFid: '3',
            limit: '25',
            api_key: apiKey
        });
        return data.result.likes.length;
    } catch (err) {
        console.error(err);
        return 0;
    }
}

// Function to fetch recasts for a single cast hash
async function fetchRecastsForCastHash(castHash) {
    try {
        const { data } = await sdk.castRecasters({
            castHash: castHash,
            api_key: '7AB956E1-C155-43F1-B7F3-5C3B8D070265'
        });
        return data.result.recasters.length;
    } catch (err) {
        console.error(err);
        return 0;
    }
}

// Main function to process channels, count likes and recasts
async function fetchAndProcessChannelIds() {
    try {
        const { data } = await sdk.casts({
            fid: '3',
            viewerFid: '278538',
            limit: '150',
            api_key: '7AB956E1-C155-43F1-B7F3-5C3B8D070265'
        });

        const channelCastMap = countChannels(data.result.casts);
        const likesCountMap = new Map();
        const recastsCountMap = new Map();

        for (let [channelName, castHashes] of channelCastMap) {
            let totalLikes = 0;
            let totalRecasts = 0;
            for (let hash of castHashes) {
                const likes = await fetchLikesForCastHash(hash);
                totalLikes += likes;

                const recasts = await fetchRecastsForCastHash(hash);
                totalRecasts += recasts;
            }
            likesCountMap.set(channelName, totalLikes);
            recastsCountMap.set(channelName, totalRecasts);
        }

        console.log("Likes Count:", mapToObject(likesCountMap));
        console.log("Recasts Count:", mapToObject(recastsCountMap));
    } catch (err) {
        console.error(err);
    }
}

// Helper function to convert Map to Object
function mapToObject(map) {
    const object = {};
    map.forEach((value, key) => {
        object[key] = value;
    });
    return object;
}

fetchAndProcessChannelIds();
