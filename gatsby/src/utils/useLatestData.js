import { useEffect, useState } from "react";

const gql = String.raw;

const deets =`
    name
    _id
    image {
        asset {
            url
            metadata {
                lqip
            }
        }
    }
`;

export default function useLatestData() {
    // hot slices
    // slicemasters
    const [hotSlices, setHotSlices] = useState();

    const [slicemasters, setSliceMasters] = useState();

    //use a side effect to fetch the data from the graphql endpoint

    useEffect(function() {
        // when the componenet loads, fetch the data
        fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: gql`
                query {
                    StoreSettings(id: "downtown") {
                      name
                      slicemasters {
                        ${deets}
                      }
                      hotSlices {
                       ${deets}
                      }
                    }
                  }`,
            }),
        })
        .then(res => res.json())
        .then(res => {
            // Check for errors
            // set the data to state
            setHotSlices(res.data.StoreSettings.hotSlices);
            setSliceMasters(res.data.StoreSettings.slicemasters);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    return {
        hotSlices,
        slicemasters
    }
}