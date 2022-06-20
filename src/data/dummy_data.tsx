const data = {
  stocks: [
    {
      currency: "USD",
      description: "Blonder Tongue Laboratories Inc",
      displaySymbol: "BDR",
      figi: "BBG000FVBVT2",
      isin: null,
      mic: "XASE",
      shareClassFIGI: "BBG001S8NC34",
      symbol: "BDR",
      symbol2: "",
      type: "Common Stock",
    },
    {
      currency: "USD",
      description: "Magnolia Oil and Gas Corporation",
      displaySymbol: "MGY",
      figi: "BBG00GNC8DL2",
      isin: null,
      mic: "XNYS",
      shareClassFIGI: "BBG00GNC8DM1",
      symbol: "MGY",
      symbol2: "",
      type: "Common Stock",
    },
    {
      currency: "USD",
      description: "iShares Russell Mid Cap Growth",
      displaySymbol: "IWP",
      figi: "BBG000BW05W9",
      isin: null,
      mic: "ARCX",
      shareClassFIGI: "BBG001S561Z8",
      symbol: "IWP",
      symbol2: "",
      type: "ETP",
    },
    {
      currency: "USD",
      description: "Ivivi Technologies Inc",
      displaySymbol: "IVVI",
      figi: "BBG000HTG4P4",
      isin: null,
      mic: "OOTC",
      shareClassFIGI: "BBG001SP98H6",
      symbol: "IVVI",
      symbol2: "",
      type: "Common Stock",
    },
    {
      currency: "USD",
      description: "K S Holdings Corporation",
      displaySymbol: "KSHOF",
      figi: "BBG00SRLNG92",
      isin: null,
      mic: "OOTC",
      shareClassFIGI: "BBG001S6JFC6",
      symbol: "KSHOF",
      symbol2: "",
      type: "Common Stock",
    },
  ],
};

function wait(ms: number): Promise<void> {
  return new Promise((resolve): void => {
      setTimeout(resolve, ms);
  });
}
  
async function fetchData() {
  // To simulate request - response delay
  // await wait(500);
  return Promise.resolve(data);
}

export default fetchData;
