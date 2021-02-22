const baseUrl = 'https://ponychallenge.trustpilot.com/pony-challenge/maze';

/**
 * get the current maze
 * @param {string} id Id of the current maze
 */
const GetMaze = async (id) => {
  try {
    const response = await fetch(baseUrl + `/${id}`);
    const data = await response.json();
    return data;
  } catch (e) {
    throw Error();
  }
};

/**
 * Move the pony in the maze
 * @param {string} id maze id
 * @param {string} direction it can be on of [stay, north, south, east, west]
 */
const MovePony = async (id, direction) => {
  const url = baseUrl + `/${id}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(direction),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    throw Error();
  }
};

/**
 * Create a new maze
 * @param {object} mazeData Maze Data
 */
const CreateMaze = async (mazeData) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mazeData),
    });
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      const data = await response.json();
      return data;
    } else {
      const text = await response.text();
      return {message: text};
    }
  } catch (e) {
    throw Error();
  }
};

export {GetMaze, MovePony, CreateMaze};
