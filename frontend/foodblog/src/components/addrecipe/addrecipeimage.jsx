import React, { useState, useCallback } from 'react';
import { Card, Form, Button, Image, Alert } from 'react-bootstrap';

function RecipePhotoUpload() {
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file) => {
    // Check file type
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setError('Only JPG and PNG files are allowed');
      return;
    }
    
    // Check file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setError('');
    setPhoto(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className=" card mb-4">
      <div className='card-body'>
        <div className='card-title'>Recipe Photo</div>
        
        <div 
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={` form-group text-center p-5 border-2 rounded ${dragActive ? 'border-primary bg-light' : 'border-dashed'}`}
          style={{
            borderStyle: dragActive ? 'solid' : 'dashed',
            cursor: 'pointer'
          }}
        >
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleChange}
            className="d-none"
            id="recipe-photo-upload"
          />
          
          {preview ? (
            <div className="text-center">
              <Image src={preview} alt="Recipe preview" thumbnail style={{ maxHeight: '300px' }} />
              <Button 
                variant="outline-secondary" 
                className="mt-3"
                onClick={() => document.getElementById('recipe-photo-upload').click()}
              >
                Change Photo
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-3">
                <i className="bi bi-cloud-arrow-up" style={{ fontSize: '2rem' }}></i>
              </div>
              <p className="mb-1">Drag and drop your dish photo here</p>
              <p className="text-muted small mb-3">JPG, PNG (Max 5MB)</p>
              <div className="border-top pt-3">
                <Button 
                  variant="dark"
                  onClick={() => document.getElementById('recipe-photo-upload').click()}
                  className='p-2'
                >
                  Browse Files
                </Button>
              </div>
            </>
          )}
        </div>

        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      </div>
    </div>
  );
}

export default RecipePhotoUpload;