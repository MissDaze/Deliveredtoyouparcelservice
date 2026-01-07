// Tracking data for different tracking numbers
const trackingData = {
    "DT123456789": {
        sender: {
            origin: "China",
            name: "Global Exports Ltd"
        },
        receiver: {
            name: "Candice Sean",
            address: "1 Vale St, St Kilda VIC, Australia"
        },
        estimatedDelivery: "2024-03-25",
        currentStatus: "In Transit",
        updates: [
            {
                date: "2024-03-20",
                time: "09:00",
                location: "Beijing, China",
                status: "Package picked up",
                description: "Your package has been picked up from the sender"
            },
            {
                date: "2024-03-21",
                time: "14:30",
                location: "Shanghai Port, China",
                status: "Departed facility",
                description: "Package has departed from Shanghai Port"
            },
            {
                date: "2024-03-22",
                time: "18:45",
                location: "In Transit",
                status: "In transit to destination country",
                description: "Your package is on its way to Australia"
            }
        ]
    },
    "DT987654321": {
        sender: {
            origin: "China",
            name: "Asia Trade Co"
        },
        receiver: {
            name: "Candice Sean",
            address: "1 Vale St, St Kilda VIC, Australia"
        },
        estimatedDelivery: "2024-03-28",
        currentStatus: "Customs Clearance",
        updates: [
            {
                date: "2024-03-18",
                time: "10:15",
                location: "Shenzhen, China",
                status: "Package received",
                description: "Package received at sorting facility"
            },
            {
                date: "2024-03-19",
                time: "16:20",
                location: "Hong Kong",
                status: "In transit",
                description: "Package in transit through Hong Kong hub"
            },
            {
                date: "2024-03-23",
                time: "08:00",
                location: "Melbourne, Australia",
                status: "Customs clearance",
                description: "Package is undergoing customs clearance"
            }
        ]
    },
    "DT456789123": {
        sender: {
            origin: "China",
            name: "Pacific Shipping Inc"
        },
        receiver: {
            name: "Candice Sean",
            address: "1 Vale St, St Kilda VIC, Australia"
        },
        estimatedDelivery: "2024-03-26",
        currentStatus: "Out for Delivery",
        updates: [
            {
                date: "2024-03-19",
                time: "11:30",
                location: "Guangzhou, China",
                status: "Package collected",
                description: "Package has been collected from sender"
            },
            {
                date: "2024-03-20",
                time: "15:45",
                location: "Guangzhou Port, China",
                status: "Departed",
                description: "Package departed from port facility"
            },
            {
                date: "2024-03-22",
                time: "09:20",
                location: "Sydney, Australia",
                status: "Arrived at facility",
                description: "Package arrived at Australian sorting facility"
            },
            {
                date: "2024-03-24",
                time: "07:15",
                location: "Melbourne Distribution Center",
                status: "Out for delivery",
                description: "Package is out for delivery to your address"
            }
        ]
    }
};

// Function to track package
function trackPackage() {
    const trackingNumber = document.getElementById('trackingNumber').value.trim();
    const resultDiv = document.getElementById('trackingResult');
    
    if (!trackingNumber) {
        resultDiv.innerHTML = '<div class="error">Please enter a tracking number</div>';
        return;
    }
    
    const data = trackingData[trackingNumber];
    
    if (!data) {
        resultDiv.innerHTML = '<div class="error">Tracking number not found. Please check and try again.</div>';
        return;
    }
    
    // Display tracking information
    let html = `
        <div class="tracking-info">
            <div class="info-section">
                <h3>Package Information</h3>
                <div class="info-row">
                    <span class="label">Tracking Number:</span>
                    <span class="value">${trackingNumber}</span>
                </div>
                <div class="info-row">
                    <span class="label">Origin:</span>
                    <span class="value">${data.sender.origin}</span>
                </div>
                <div class="info-row">
                    <span class="label">Sender:</span>
                    <span class="value">${data.sender.name}</span>
                </div>
                <div class="info-row">
                    <span class="label">Receiver:</span>
                    <span class="value">${data.receiver.name}</span>
                </div>
                <div class="info-row">
                    <span class="label">Delivery Address:</span>
                    <span class="value">${data.receiver.address}</span>
                </div>
                <div class="info-row">
                    <span class="label">Current Status:</span>
                    <span class="value status-${data.currentStatus.toLowerCase().replace(/\s+/g, '-')}">${data.currentStatus}</span>
                </div>
                <div class="info-row">
                    <span class="label">Estimated Delivery:</span>
                    <span class="value">${data.estimatedDelivery}</span>
                </div>
            </div>
            
            <div class="timeline-section">
                <h3>Tracking History</h3>
                <div class="timeline">
    `;
    
    // Add timeline updates (reverse order to show latest first)
    data.updates.slice().reverse().forEach((update, index) => {
        html += `
            <div class="timeline-item ${index === 0 ? 'active' : ''}">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <span class="timeline-date">${update.date} ${update.time}</span>
                        <span class="timeline-status">${update.status}</span>
                    </div>
                    <div class="timeline-location">${update.location}</div>
                    <div class="timeline-description">${update.description}</div>
                </div>
            </div>
        `;
    });
    
    html += `
                </div>
            </div>
        </div>
    `;
    
    resultDiv.innerHTML = html;
}

// Add event listener for Enter key
document.getElementById('trackingNumber').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        trackPackage();
    }
});
