// Parcel tracking data
const parcels = {
    'DT123456789': {
        status: 'In Transit',
        location: 'Distribution Center, New York',
        estimatedDelivery: '2025-01-22',
        updates: [
            { date: '2025-01-15', status: 'Package received at origin facility' },
            { date: '2025-01-16', status: 'In transit to destination' },
            { date: '2025-01-17', status: 'Arrived at distribution center' }
        ]
    },
    'DT987654321': {
        status: 'Out for Delivery',
        location: 'Local Delivery Hub, Los Angeles',
        estimatedDelivery: '2025-01-25',
        updates: [
            { date: '2025-01-14', status: 'Package received at origin facility' },
            { date: '2025-01-15', status: 'In transit to destination' },
            { date: '2025-01-17', status: 'Out for delivery' }
        ]
    },
    'DT456789123': {
        status: 'Delivered',
        location: 'Chicago, IL',
        estimatedDelivery: '2025-01-23',
        updates: [
            { date: '2025-01-10', status: 'Package received at origin facility' },
            { date: '2025-01-12', status: 'In transit to destination' },
            { date: '2025-01-15', status: 'Delivered' }
        ]
    }
};

// DOM elements
const trackingForm = document.getElementById('trackingForm');
const trackingInput = document.getElementById('trackingNumber');
const trackingResult = document.getElementById('trackingResult');
const parcelInfo = document.getElementById('parcelInfo');

// Track parcel function
function trackParcel(trackingNumber) {
    const parcel = parcels[trackingNumber];
    
    if (parcel) {
        displayParcelInfo(trackingNumber, parcel);
    } else {
        displayError();
    }
}

// Display parcel information
function displayParcelInfo(trackingNumber, parcel) {
    let updatesHTML = '';
    parcel.updates.forEach(update => {
        updatesHTML += `
            <div class="update-item">
                <strong>${update.date}</strong>: ${update.status}
            </div>
        `;
    });

    parcelInfo.innerHTML = `
        <div class="info-item">
            <strong>Tracking Number:</strong> ${trackingNumber}
        </div>
        <div class="info-item">
            <strong>Status:</strong> <span class="status-badge">${parcel.status}</span>
        </div>
        <div class="info-item">
            <strong>Current Location:</strong> ${parcel.location}
        </div>
        <div class="info-item">
            <strong>Estimated Delivery:</strong> ${parcel.estimatedDelivery}
        </div>
        <div class="updates-section">
            <h3>Tracking Updates</h3>
            ${updatesHTML}
        </div>
    `;
    
    trackingResult.style.display = 'block';
}

// Display error message
function displayError() {
    parcelInfo.innerHTML = `
        <div class="error-message">
            <p>❌ Tracking number not found. Please check and try again.</p>
        </div>
    `;
    trackingResult.style.display = 'block';
}

// Form submit event
trackingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const trackingNumber = trackingInput.value.trim().toUpperCase();
    
    if (trackingNumber) {
        trackParcel(trackingNumber);
    }
});

// Sample tracking numbers for demo
document.addEventListener('DOMContentLoaded', () => {
    const sampleNumbers = document.createElement('div');
    sampleNumbers.className = 'sample-numbers';
    sampleNumbers.innerHTML = `
        <p style="text-align: center; margin-top: 20px; color: #666;">
            <small>Try these sample tracking numbers: DT123456789, DT987654321, DT456789123</small>
        </p>
    `;
    trackingForm.parentNode.insertBefore(sampleNumbers, trackingForm.nextSibling);
});