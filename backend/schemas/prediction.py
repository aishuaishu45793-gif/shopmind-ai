from pydantic import BaseModel, Field


class PredictionRequest(BaseModel):
    pages_viewed: int = Field(..., ge=0)
    session_minutes: float = Field(..., ge=0)
    products_viewed: int = Field(..., ge=0)
    cart_additions: int = Field(..., ge=0)
    discount_seen: int = Field(..., ge=0, le=1)
    previous_orders: int = Field(..., ge=0)


class PredictionResponse(BaseModel):
    prediction: int
    purchase_probability: float
    purchase_probability_percent: float
    intent: str