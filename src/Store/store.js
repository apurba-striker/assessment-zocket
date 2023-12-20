// CommonStoreContext.js
import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  steps: 1,
  allCampaigns: [
    {
      budget: 3400,
      campaignTitle: "Bluberry cake Campaign",
      campaign_status: "Active",
      clicks: 500,
      endDate: "2023-12-31",
      id: "1",
      location: "Chennai",
      campaignImage: "https://file.rendit.io/n/htJJVXPa1haj1nA3gT6o.png",
      platform: "Youtube",
      start: true,
      startDate: "2023-12-18",
      // createdAt: "2023-01-01T00:00:00.000Z",
    },
    {
      budget: 3400,
      campaignTitle: "Chocolate cake campaign",
      campaign_status: "Active",
      clicks: 500,
      endDate: "2023-12-31",
      id: "2",
      location: "Coimbatore",
      campaignImage: "https://file.rendit.io/n/SVFfOw16fHu9LTAzXffr.png",
      platform: "Google",
      start: false,
      startDate: "2023-01-01",
      // createdAt: "2023-01-01T00:00:00.000Z",
    },
    {
      budget: 3400,
      campaignTitle: "Browine cake campaign",
      campaign_status: "Active",
      clicks: 500,
      endDate: "2023-10-31",
      id: "3",
      location: "Erode",
      campaignImage:"https://file.rendit.io/n/zqMvxBEDEhumXkIes8kK.png",
      platform: "FB",
      start: false,
      startDate: "2023-01-01",
      // createdAt: "2023-01-01T00:00:00.000Z",
    },
    {
      budget: 3400,
      campaignTitle: "Pumpkin cake camapign",
      campaign_status: "Active",
      clicks: 500,
      endDate: "2023-10-31",
      id: "3",
      location: "Coimbatore",
      campaignImage:"https://file.rendit.io/n/htJJVXPa1haj1nA3gT6o.png",
      platform: "FB",
      start: false,
      startDate: "2023-01-01",
      // createdAt: "2023-01-01T00:00:00.000Z",
    },
    {
      budget: 3400,
      campaignTitle: "Cup cakes campaign",
      campaign_status: "Active",
      clicks: 500,
      endDate: "2023-10-31",
      id: "3",
      location: "Coimbatore",
      campaignImage:"https://file.rendit.io/n/htJJVXPa1haj1nA3gT6o.png",
      platform: "FB",
      start: false,
      startDate: "2023-01-01",
      // createdAt: "2023-01-01T00:00:00.000Z",
    },
    // Add more dummy campaigns as needed
  ],
};

const CommonStoreContext = createContext();

export const useCommonStore = () => {
  return useContext(CommonStoreContext);
};

export const CommonStoreProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT_STEPS":
        return { ...state, steps: state.steps + 1 };
      case "SET_CAMPAIGNS":
        return { ...state, allCampaigns: [...state.allCampaigns,action.payload]};
        case "ADD_CAMPAIGN":
          return { ...state, allCampaigns: [...state.allCampaigns, action.payload]};
          case "DELETE_CAMPAIGN":
        // Filter out the campaign with the specified ID
        const updatedCampaigns = state.allCampaigns.filter(
          (campaign) => campaign.id !== action.payload
        );
        return { ...state, allCampaigns: updatedCampaigns };
      default:
        return state;
    }
  };

  const addNewCampaign = (formData) => {
    // Create a new campaign object
    const newCampaign = {
      budget: 1500,
      campaignTitle: "New Campaign",
      campaign_status: "Inactive",
      clicks: 700,
      endDate: "2023-11-30",
      id: (state.allCampaigns.length + 1).toString(), // Use a unique ID, you can adjust this logic as needed
      location: "Location",
      campaignImage:  "https://dummyimage.com/300x200/333/fff",
      platform: "FB",
      start: false,
      startDate: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };

    // Dispatch an action to add the new campaign
    dispatch({ type: "ADD_CAMPAIGN", payload:formData });
  };

  const deleteCampaign = (campaignId) => {
    // Dispatch an action to delete the campaign with the specified ID
    dispatch({ type: "DELETE_CAMPAIGN", payload: campaignId });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    actions: {
      incrementSteps: () => dispatch({ type: "INCREMENT_STEPS" }),
      addNewCampaign: addNewCampaign,
      deleteCampaign: deleteCampaign,

    },
  };

  return (
    <CommonStoreContext.Provider value={value}>
      {children}
    </CommonStoreContext.Provider>
  );
};
