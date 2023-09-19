async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/wellingtoncgomes/Portf-lio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}