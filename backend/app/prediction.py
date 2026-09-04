from fastapi import APIRouter

from schemas.prediction import PredictionRequest, PredictionResponse
from services.prediction_service import predict_purchase_intent


router = APIRouter(
    prefix="/api",
    tags=["AI Prediction"],
)


@router.post(
    "/predict",
    response_model=PredictionResponse,
)
def predict(request: PredictionRequest):

    result = predict_purchase_intent(
        pages_viewed=request.pages_viewed,
        session_minutes=request.session_minutes,
        products_viewed=request.products_viewed,
        cart_additions=request.cart_additions,
        discount_seen=request.discount_seen,
        previous_orders=request.previous_orders,
    )

    return result