import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Former AI styling hub. Content now lives in Foundations rail tabs —
 * keep this redirect so any leftover links still land correctly.
 */
const AiStylingPage = () => <Navigate to="/foundations/ai/overview" replace />;

export default AiStylingPage;
