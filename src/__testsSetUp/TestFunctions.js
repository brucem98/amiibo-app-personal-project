// Amiibos List Component

export const filteredAmiibos = (amiibos, query) => 
  amiibos.filter(amiibo =>
    amiibo.name.toLowerCase().includes(query.toLowerCase()) ||
    amiibo.gameSeries.toLowerCase().includes(query.toLowerCase()) ||
    amiibo.amiiboSeries.toLowerCase().includes(query.toLowerCase())
  );


