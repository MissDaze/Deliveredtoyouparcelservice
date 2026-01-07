// Tracking data with complete sender and receiver information
const trackingData = {
    'DT123456789': {
        trackingNumber: 'DT123456789',
        sender: {
            name: 'Global Exports Ltd',
            location: 'China'
        },
        receiver: {
            name: 'Candice Sean',
            address: '1 Vale St, St Kilda VIC, Australia'
        },
        sentDate: '2024-12-31',
        estimatedDelivery: '2025-01-22',
        status: 'Delivered',
        currentLocation: 'St Kilda VIC, Australia',
        timeline: [
            { date: '2024-12-31 08:00:00', status: 'Package picked up', location: 'China' },
            { date: '2024-12-31 14:30:00', status: 'In transit to sorting facility', location: 'China' },
            { date: '2025-01-01 10:00:00', status: 'Arrived at international sorting facility', location: 'China' },
            { date: '2025-01-03 22:15:00', status: 'Departed from origin country', location: 'China' },
            { date: '2025-01-08 06:45:00', status: 'Arrived in Australia', location: 'Sydney, Australia' },
            { date: '2025-01-10 11:20:00', status: 'Customs clearance completed', location: 'Sydney, Australia' },
            { date: '2025-01-12 15:00:00', status: 'In transit to local facility', location: 'Melbourne, Australia' },
            { date: '2025-01-15 09:30:00', status: 'Arrived at local delivery facility', location: 'St Kilda VIC, Australia' },
            { date: '2025-01-17 08:00:00', status: 'Out for delivery', location: 'St Kilda VIC, Australia' },
            { date: '2025-01-17 14:25:00', status: 'Delivered', location: '1 Vale St, St Kilda VIC, Australia' }
        ]
    },
    'DT987654321': {
        trackingNumber: 'DT987654321',
        sender: {
            name: 'Asia Trade Co',
            location: 'China'
        },
        receiver: {
            name: 'Candice Sean',
            address: '1 Vale St, St Kilda VIC, Australia'
        },
        sentDate: '2024-12-31',
        estimatedDelivery: '2025-01-25',
        status: 'Delivered',
        currentLocation: 'St Kilda VIC, Australia',
        timeline: [
            { date: '2024-12-31 09:15:00', status: 'Package picked up', location: 'China' },
            { date: '2024-12-31 16:45:00', status: 'In transit to sorting facility', location: 'China' },
            { date: '2025-01-02 11:30:00', status: 'Arrived at international sorting facility', location: 'China' },
            { date: '2025-01-05 20:00:00', status: 'Departed from origin country', location: 'China' },
            { date: '2025-01-10 07:30:00', status: 'Arrived in Australia', location: 'Sydney, Australia' },
            { date: '2025-01-13 10:15:00', status: 'Customs clearance completed', location: 'Sydney, Australia' },
            { date: '2025-01-16 14:20:00', status: 'In transit to local facility', location: 'Melbourne, Australia' },
            { date: '2025-01-19 10:00:00', status: 'Arrived at local delivery facility', location: 'St Kilda VIC, Australia' },
            { date: '2025-01-21 08:30:00', status: 'Out for delivery', location: 'St Kilda VIC, Australia' },
            { date: '2025-01-21 15:40:00', status: 'Delivered', location: '1 Vale St, St Kilda VIC, Australia' }
        ]
    },
    'DT456789123': {
        trackingNumber: 'DT456789123',
        sender: {
            name: 'Pacific Shipping Inc',
            location: 'China'
        },
        receiver: {
            name: 'Candice Sean',
            address: '1 Vale St, St Kilda VIC, Australia'
        },
        sentDate: '2024-12-31',
        estimatedDelivery: '2025-01-23',
        status: 'Delivered',
        currentLocation: 'St Kilda VIC, Australia',
        timeline: [
            { date: '2024-12-31 07:30:00', status: 'Package picked up', location: 'China' },
            { date: '2024-12-31 13:00:00', status: 'In transit to sorting facility', location: 'China' },
            { date: '2025-01-01 16:45:00', status: 'Arrived at international sorting facility', location: 'China' },
            { date: '2025-01-04 19:30:00', status: 'Departed from origin country', location: 'China' },
            { date: '2025-01-09 08:15:00', status: 'Arrived in Australia', location: 'Sydney, Australia' },
            { date: '2025-01-11 12:00:00', status: 'Customs clearance completed', location: 'Sydney, Australia' },
            { date: '2025-01-14 13:45:00', status: 'In transit to local facility', location: 'Melbourne, Australia' },
            { date: '2025-01-17 09:15:00', status: 'Arrived at local delivery facility', location: 'St Kilda VIC, Australia' },
            { date: '2025-01-19 07:45:00', status: 'Out for delivery', location: 'St Kilda VIC, Australia' },
            { date: '2025-01-19 13:50:00', status: 'Delivered', location: '1 Vale St, St Kilda VIC, Australia' }
        ]
    }
};

// Current date and time (UTC - YYYY-MM-DD HH:MM:SS formatted)
const currentDateTime = '2026-01-07 14:39:40';

// Track package function
function trackPackage() {
    const trackingInput = document.getElementById('trackingNumber').value.trim().toUpperCase();
    const resultDiv = document.getElementById('result');
    
    if (!trackingInput) {
        resultDiv.innerHTML = '<p class="error">Please enter a tracking number.</p>';
        resultDiv.style.display = 'block';
        return;
    }
    
    const packageInfo = trackingData[trackingInput];
    
    if (packageInfo) {
        let timelineHtml = '<div class="timeline">';
        timelineHtml += '<h3>Shipment Timeline</h3>';
        
        packageInfo.timeline.forEach((event, index) => {
            const isLastEvent = index === packageInfo.timeline.length - 1;
            timelineHtml += `
                <div class="timeline-item ${isLastEvent ? 'active' : ''}">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${event.date}</div>
                        <div class="timeline-status">${event.status}</div>
                        <div class="timeline-location">${event.location}</div>
                    </div>
                </div>
            `;
        });
        
        timelineHtml += '</div>';
        
        resultDiv.innerHTML = `
            <div class="package-info">
                <h2>Tracking Information</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Tracking Number:</strong>
                        <span>${packageInfo.trackingNumber}</span>
                    </div>
                    <div class="info-item">
                        <strong>Status:</strong>
                        <span class="status-badge status-${packageInfo.status.toLowerCase().replace(' ', '-')}">${packageInfo.status}</span>
                    </div>
                    <div class="info-item">
                        <strong>Sender:</strong>
                        <span>${packageInfo.sender.name}, ${packageInfo.sender.location}</span>
                    </div>
                    <div class="info-item">
                        <strong>Receiver:</strong>
                        <span>${packageInfo.receiver.name}</span>
                    </div>
                    <div class="info-item">
                        <strong>Delivery Address:</strong>
                        <span>${packageInfo.receiver.address}</span>
                    </div>
                    <div class="info-item">
                        <strong>Sent Date:</strong>
                        <span>${packageInfo.sentDate}</span>
                    </div>
                    <div class="info-item">
                        <strong>Estimated Delivery:</strong>
                        <span>${packageInfo.estimatedDelivery}</span>
                    </div>
                    <div class="info-item">
                        <strong>Current Location:</strong>
                        <span>${packageInfo.currentLocation}</span>
                    </div>
                </div>
                ${timelineHtml}
                <div class="current-time">
                    <small>Current Date/Time (UTC): ${currentDateTime}</small>
                </div>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="error-message">
                <h3>Tracking Number Not Found</h3>
                <p>Sorry, we couldn't find any information for tracking number: <strong>${trackingInput}</strong></p>
                <p>Please check the tracking number and try again.</p>
            </div>
        `;
    }
    
    resultDiv.style.display = 'block';
}

// Allow tracking on Enter key press
document.getElementById('trackingNumber').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        trackPackage();
    }
});

// Display current date and time on page load
window.addEventListener('load', function() {
    const footer = document.querySelector('footer');
    if (footer) {
        const timeDisplay = document.createElement('div');
        timeDisplay.className = 'footer-time';
        timeDisplay.innerHTML = `<small>Current Date/Time (UTC): ${currentDateTime}</small>`;
        footer.appendChild(timeDisplay);
    }
});
