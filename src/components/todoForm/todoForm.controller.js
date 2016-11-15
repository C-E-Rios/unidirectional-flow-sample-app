class SearchListContoller {

    constructor () {}

    submit () {
        if (!this.label) return;

        this.onAdd({
            $event: { label: this.label }
        });

        this.label = '';
    }

}

export default SearchListContoller;
