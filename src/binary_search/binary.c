/*
** EPITECH PROJECT, 2024
** binary
** File description:
** binary.c
*/

#include <stdio.h>
#include <stdlib.h>

void print_array(int arr[], int left, int right)
{
    for (int i = left; i <= right; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int binary_search(int arr[], int size, int target)
{
    int left = 0;
    int right = size - 1;
    int mid;

    while (left <= right) {
        print_array(arr, left, right);
        mid = left + (right - left) / 2;
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
}

int main(int argc, char **argv)
{
    int target = atoi(argv[1]);
    int size = argc - 2;
    int arr[size];
    int index;

    if (argc < 3) {
        printf("Usage: %s target element1 [element2 ...]\n", argv[0]);
        return 1;
    }
    for (int i = 0; i < size; i++) {
        arr[i] = atoi(argv[i + 2]);
    }
    index = binary_search(arr, size, target);
    if (index != -1) {
        printf("Element %d found at index %d.\n", target, index);
    } else {
        printf("Element %d not found.\n", target);
    }
    return 0;
}
