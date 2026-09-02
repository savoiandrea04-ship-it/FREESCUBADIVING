// Plain config object (equivalent to defineCliConfig, without the ESM interop issue).
export default {
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "4fuznbul",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  // Studio will be reachable at https://freewayscuba.sanity.studio after deploy
  studioHost: "freewayscuba",
};
