

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
