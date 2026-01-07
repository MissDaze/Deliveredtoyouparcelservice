// Updated with correct sender/receiver info and dates
document.getElementById('trackingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const trackingNumber = document.getElementById('trackingNumber').value;
    const resultsDiv = document.getElementById('results');
    
    // Sample tracking data
    const trackingData = {
        'DL123456789': {
            status: 'In Transit',
            location: 'New York Distribution Center',
            estimatedDelivery: 'December 28, 2024',
            history: [
                { date: '2024-12-20', status: 'Package received', location: 'Los Angeles, CA' },
                { date: '2024-12-22', status: 'In transit', location: 'Phoenix, AZ' },
                { date: '2024-12-25', status: 'In transit', location: 'New York, NY' }
            ]
        },
        'DL987654321': {
            status: 'Delivered',
            location: 'Chicago, IL',
            estimatedDelivery: 'December 23, 2024',
            history: [
                { date: '2024-12-18', status: 'Package received', location: 'Seattle, WA' },
                { date: '2024-12-20', status: 'In transit', location: 'Denver, CO' },
                { date: '2024-12-23', status: 'Delivered', location: 'Chicago, IL' }
            ]
        }
    };
    
    if (trackingData[trackingNumber]) {
        const data = trackingData[trackingNumber];
        let html = `
            <div class="tracking-info">
                <h2>Tracking Information</h2>
                <p><strong>Tracking Number:</strong> ${trackingNumber}</p>
                <p><strong>Status:</strong> <span class="status-${data.status.toLowerCase().replace(' ', '-')}">${data.status}</span></p>
                <p><strong>Current Location:</strong> ${data.location}</p>
                <p><strong>Estimated Delivery:</strong> ${data.estimatedDelivery}</p>
                
                <h3>Tracking History</h3>
                <div class="timeline">
        `;
        
        data.history.forEach(item => {
            html += `
                <div class="timeline-item">
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-content">
                        <strong>${item.status}</strong><br>
                        ${item.location}
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
        
        resultsDiv.innerHTML = html;
    } else {
        resultsDiv.innerHTML = `
            <div class="error">
                <p>Tracking number not found. Please check your tracking number and try again.</p>
                <p>Try these sample tracking numbers:</p>
                <ul>
                    <li>DL123456789</li>
                    <li>DL987654321</li>
                </ul>
            </div>
        `;
    }
});