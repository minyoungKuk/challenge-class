import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

function CartPage() {
  const queryClient = useQueryClient();
  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => api.cart.getCart(),
  });

  const { mutateAsync: removeItemCart } = useMutation<unknown, Error, number>({
    mutationFn: (productId) => api.cart.removeItemFromCart(productId),
  });

  const handleClickRemoveItemFromCart = (productId: number) => async () => {
    // 장바구니 제거하는 로직
    await removeItemCart(productId, {
      onSuccess: () => {
        alert("상품이 장바구니에서 제거 되었습니다.");
        queryClient.invalidateQueries({ queryKey: ["cart"], exact: true });
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div>
      <h2> 장바구니 </h2>

      {isLoading ? (
        "loading.."
      ) : (
        <ul>
          {cart.items.map((cartItem) => (
            <li key={cartItem.id}>
              <h5> {cartItem.product.name} </h5>
              <span>[ {cartItem.quantity}개 ]</span>
              <button
                onClick={handleClickRemoveItemFromCart(cartItem.product.id)}
              >
                장바구니에서 빼기
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
