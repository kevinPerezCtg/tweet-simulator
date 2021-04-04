import { ref } from "vue";

export default function useFormTweet() {
    const showForm = ref(false);

    const openClosedForm = () =>{
        showForm.value = !showForm.value;
    }

    return {showForm, openClosedForm }
}