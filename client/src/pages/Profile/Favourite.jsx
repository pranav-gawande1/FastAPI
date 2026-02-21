import React, { useState } from 'react';

const Favorites = () => {
    const [favorites, setFavorites] = useState([
        { id: 1, name: 'Margherita Pizza', price: '$12.99', category: 'Pizza' },
        { id: 2, name: 'Pepperoni Pizza', price: '$14.99', category: 'Pizza' },
        { id: 3, name: 'Veggie Supreme', price: '$13.99', category: 'Pizza' },
        { id: 4, name: 'BBQ Chicken Pizza', price: '$15.99', category: 'Pizza' },
    ]);

    const handleRemove = (id) => {
        setFavorites((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div>
            <h1 className="page-title">❤️ My Favorites</h1>

            {favorites.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-state-icon">🍽️</div>
                    <h2 className="empty-state-title">No Favorites Yet</h2>
                    <p className="empty-state-text">
                        Start adding your favorite dishes to see them here. Heart any item to add it to your favorites!
                    </p>
                    <button className="btn btn-primary">
                        🛍️ Browse Restaurants
                    </button>
                </div>
            ) : (
                <>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ color: '#666', fontSize: '14px' }}>
                            You have <strong>{favorites.length}</strong> favorite {favorites.length === 1 ? 'item' : 'items'}
                        </p>
                    </div>

                    <div className="grid grid-3">
                        {favorites.map((item) => (
                            <div key={item.id} className="product-card">
                                <div
                                    className="product-image"
                                    style={{
                                        background: `linear-gradient(135deg, ${['#667eea', '#764ba2', '#f093fb', '#4facfe'][item.id % 4]} 0%, ${['#764ba2', '#667eea', '#00f2fe', '#00a1ff'][item.id % 4]} 100%)`,
                                    }}
                                >
                                    🍕
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{item.name}</h3>
                                    <p style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>
                                        {item.category}
                                    </p>
                                    <div className="product-price">{item.price}</div>
                                    <div className="product-actions">
                                        <button className="btn btn-primary" style={{ flex: 1 }}>
                                            🛒 Add to Cart
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleRemove(item.id)}
                                            style={{ flex: '0 0 40px', padding: '8px' }}
                                            title="Remove from favorites"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {favorites.length > 0 && (
                <div className="card" style={{ marginTop: '40px' }}>
                    <h2 className="card-title">💡 Quick Stats</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '16px',
                    }}>
                        <div style={{
                            padding: '16px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff6b35' }}>
                                {favorites.length}
                            </div>
                            <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                                Total Favorites
                            </div>
                        </div>

                        <div style={{
                            padding: '16px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#004e89' }}>
                                {new Set(favorites.map((f) => f.category)).size}
                            </div>
                            <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                                Categories
                            </div>
                        </div>

                        <div style={{
                            padding: '16px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#27ae60' }}>
                                ${(favorites.length * 14.99).toFixed(2)}
                            </div>
                            <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                                Total Value
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Favorites;