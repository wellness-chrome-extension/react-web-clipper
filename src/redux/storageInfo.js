import Storage from "chrome-storage";

const SET_STORAGE_INFO = "SET_STORAGE_INFO";

export const setStorageInfo = storageInformation => ({
  type: SET_STORAGE_INFO,
  storageInformation
});

export const setStorageConfig = () => async dispatch => {
  try {
    Storage.configure({
      scope: "sync" // or "local"
    });
    console.log("in config thunk");
  } catch (err) {
    console.error(err);
  }
};

export const getStorageInfo = () => async dispatch => {
  try {
    Storage.load(function() {
      Storage.set("installtime", Date.now());
      Storage.set({
        installtime: Date.now(),
        type: "referral"
      });
      let storageObj = Storage.get(null);
      dispatch(setStorageInfo(storageObj));
    });
  } catch (err) {
    console.error(err);
  }
};

export const setStarredItem = itemInfo => async dispatch => {
  try {
    Storage.load(function() {
      Storage.set({
        [itemInfo.key]: {
          info: itemInfo.info,
          context: itemInfo.context,
          starred: !itemInfo.starred
        }
      });
      console.log("star key in thunk", itemInfo);

      console.log("here1!1!");
    });
  } catch (err) {
    console.error(err);
  }
};

export const removeItem = itemInfo => async dispatch => {
  try {
    console.log("in remove thunk");
    console.log("key in thunk check it", itemInfo.key);
    Storage.load(function() {
      Storage.set({
        [itemInfo.key]: ""
      });
      // Storage.delete([itemInfo.key]);
      console.log("remove key in thunk", itemInfo.key);
    });
  } catch (err) {
    console.error(err);
  }
};


export const addItem = (itemInfo) => async dispatch => {
  try {
    console.log("in add thunk");
    let date1 = new Date();
    let seconds1 = date1.getTime().toString();
    Storage.load(function() {
      Storage.set({
        [seconds1]: {
          info: itemInfo,
          context: 'entered',
          starred: false
        }
      });;
    });
  } catch (err) {
    console.error(err);
  }
};

const storageReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_STORAGE_INFO: {
      return action.storageInformation;
    }
    default: {
      return state;
    }
  }
};

export default storageReducer;
