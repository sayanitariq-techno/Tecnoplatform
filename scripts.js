document.addEventListener('DOMContentLoaded', () => {
    // यहाँ आप क्लाइंट्स, मैनपावर, मैसेज अलर्ट और गेट पास का डेटा API से लोड करेंगे
    // फिलहाल, हम इसे मैन्युअल रूप से अपडेट कर रहे हैं
    const totalClients = 50; 
    const totalManpower = 120;
    const messageAlerts = 5;
    const gatePasses = 3;

    document.getElementById('totalClients').innerText = totalClients;
    document.getElementById('totalManpower').innerText = totalManpower;
    document.getElementById('messageAlerts').innerText = messageAlerts;
    document.getElementById('gatePasses').innerText = gatePasses;
});
